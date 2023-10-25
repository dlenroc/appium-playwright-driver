/// <reference path='../../types/asyncbox.d.ts'/>

import type { Element } from '@appium/types';
import { errors } from '@appium/base-driver';
import { longSleep } from 'asyncbox';
import type { Driver } from '../Driver';

type Action = Key | Pointer;

interface Pause {
  type: 'pause';
  duration: number;
}

interface Key {
  id: string;
  type: 'key';
  actions: (Pause | KeyDownOrUp)[];
}

interface KeyDownOrUp {
  type: 'keyDown' | 'keyUp';
  value: string;
}

interface Pointer {
  id: string;
  type: 'pointer';
  parameters: {
    pointerType: string;
  };
  actions: (Pause | PointerMove | PointerDownOrUp)[];
}

interface PointerMove {
  duration?: number;
  type: 'pointerMove';
  x: number;
  y: number;
  origin: Element | 'pointer';
}

interface PointerDownOrUp {
  type: 'pointerDown' | 'pointerUp';
  button: number;
}

export const SPECIAL_SYMBOLS: Record<string, string> = {
  '\uE000': 'Unidentified',
  '\uE001': 'Cancel',
  '\uE002': 'Help',
  '\uE003': 'Backspace',
  '\uE004': 'Tab',
  '\uE005': 'Clear',
  '\uE006': 'Return',
  '\uE007': 'Enter',
  '\uE008': 'Shift',
  '\uE009': 'Control',
  '\uE00A': 'Alt',
  '\uE00B': 'Pause',
  '\uE00C': 'Escape',
  '\uE00D': ' ',
  '\uE00E': 'PageUp',
  '\uE00F': 'PageDown',
  '\uE010': 'End',
  '\uE011': 'Home',
  '\uE012': 'ArrowLeft',
  '\uE013': 'ArrowUp',
  '\uE014': 'ArrowRight',
  '\uE015': 'ArrowDown',
  '\uE016': 'Insert',
  '\uE017': 'Delete',
  '\uE018': ';',
  '\uE019': '=',
  '\uE01A': '0',
  '\uE01B': '1',
  '\uE01C': '2',
  '\uE01D': '3',
  '\uE01E': '4',
  '\uE01F': '5',
  '\uE020': '6',
  '\uE021': '7',
  '\uE022': '8',
  '\uE023': '9',
  '\uE024': '*',
  '\uE025': '+',
  '\uE026': ',',
  '\uE027': '-',
  '\uE028': '.',
  '\uE029': '/',
  '\uE031': 'F1',
  '\uE032': 'F2',
  '\uE033': 'F3',
  '\uE034': 'F4',
  '\uE035': 'F5',
  '\uE036': 'F6',
  '\uE037': 'F7',
  '\uE038': 'F8',
  '\uE039': 'F9',
  '\uE03A': 'F10',
  '\uE03B': 'F11',
  '\uE03C': 'F12',
  '\uE03D': 'Meta',
  '\uE040': 'ZenkakuHankaku',
  '\uE050': 'Shift',
  '\uE051': 'Control',
  '\uE052': 'Alt',
  '\uE053': 'Meta',
  '\uE054': 'PageUp',
  '\uE055': 'PageDown',
  '\uE056': 'End',
  '\uE057': 'Home',
  '\uE058': 'ArrowLeft',
  '\uE059': 'ArrowUp',
  '\uE05A': 'ArrowRight',
  '\uE05B': 'ArrowDown',
  '\uE05C': 'Insert',
  '\uE05D': 'Delete',
};

export async function performActions(this: Driver, actions: Action[]): Promise<void> {
  for (const action of actions) {
    if (action.type === 'key') {
      await performKeyActions(this, action);
    } else if (action.type === 'pointer') {
      await performPointerActions(this, action);
    } else {
      throw new errors.InvalidArgumentError(`Unsupported action: ${action}`);
    }
  }
}

async function performKeyActions(driver: Driver, key: Key): Promise<void> {
  for (const action of key.actions) {
    const { page } = await driver.handlePrompts();

    switch (action.type) {
      case 'keyDown':
        page.current.keyboard.down(SPECIAL_SYMBOLS[action.value] || action.value);
        break;
      case 'keyUp':
        page.current.keyboard.up(SPECIAL_SYMBOLS[action.value] || action.value);
        break;
      case 'pause':
        longSleep(action.duration);
        break;
    }
  }
}

async function performPointerActions(driver: Driver, pointer: Pointer): Promise<void> {
  for (const action of pointer.actions) {
    const { page } = await driver.handlePrompts();

    let button: 'left' | 'middle' | 'right' = 'left';
    if (action.type === 'pointerDown' || action.type === 'pointerUp') {
      if (action.button === 0) {
        button = 'left';
      } else if (action.button === 1) {
        button = 'middle';
      } else if (action.button === 2) {
        button = 'right';
      } else {
        throw new errors.InvalidArgumentError(`Unsupported pointer button ${action.button}`);
      }
    }

    switch (action.type) {
      case 'pointerMove':
        if (action.origin === 'pointer') {
          await page.current.mouse.move(action.x, action.y);
        } else {
          let position = action.x || action.y ? { x: action.x, y: action.y } : undefined;
          const element = await driver.getElement(action.origin[driver.WEB_ELEMENT_IDENTIFIER]);
          await element.hover({ force: true, position });
        }
        break;
      case 'pointerDown':
        page.current.mouse.down({ button });
        break;
      case 'pointerUp':
        page.current.mouse.up({ button });
        break;
      case 'pause':
        longSleep(action.duration);
        break;
    }
  }
}
