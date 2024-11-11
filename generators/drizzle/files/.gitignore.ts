import { generate } from '@specui/core';

export default async function GitIgnoreGenerator() {
  return await generate({
    template: ['node_modules/', '.DS_Store'].join('\n'),
  });
}
