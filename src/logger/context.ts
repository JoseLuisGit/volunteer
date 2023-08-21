import {Namespace, createNamespace, getNamespace} from 'cls-hooked';

const namespaceName = 'VOLUNTEER_AUTH_SERVICE';

export function getContext(): Namespace | undefined {
  return getNamespace(namespaceName);
}

export function createContext(): Namespace {
  return createNamespace(namespaceName);
}

export function get(key: string): string | null {
  const ctx = getContext();
  if (!ctx || !ctx.active) {
    return null;
  }
  return ctx.get(key);
}

export function set(key: string, value: string): string | undefined {
  const ctx = getContext();
  if (!ctx || !ctx.active) {
    return;
  }
  return ctx.set(key, value);
}

export default {getContext, createContext, get, set};
