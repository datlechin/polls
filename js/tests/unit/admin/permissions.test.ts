import fs from 'fs';
import path from 'path';
import jsYaml from 'js-yaml';
import flatten from 'flat';
import { PERMISSIONS } from '../../../src/admin/extend';

const locale = flatten(jsYaml.load(fs.readFileSync(path.resolve(process.cwd(), '../resources/locale/en.yml'), 'utf8')) as object) as Record<
  string,
  string
>;

describe('admin permissions', () => {
  it('has a label in the locale file for every permission', () => {
    const missing = PERMISSIONS.filter(({ key }) => !locale[`fof-polls.admin.permissions.${key}`]);

    expect(missing.map(({ key }) => key)).toEqual([]);
  });

  it('registers each permission once', () => {
    const names = PERMISSIONS.map(({ permission }) => permission);

    expect(new Set(names).size).toBe(names.length);
  });

  it('only uses permission grid columns core knows about', () => {
    PERMISSIONS.forEach(({ type }) => expect(['view', 'start', 'reply', 'moderate']).toContain(type));
  });
});
