import test from 'ava';

/*
Because we rebuild `token_names.json` in the `pretest` step, this will always pass in development.

However, it will fail if `cracks` checks out the old `token_names.json` and finds a previously defined
token. Renames or removals should be a "BREAKING CHANGE".
*/
test('All previously existing token names still exist', t => {
    const expected = new Set([...require('./token_names.json')]);
    const actual = new Set([...Object.keys(require('.'))]);
    const missing = [...expected].filter(x => !actual.has(x));

    t.deepEqual(missing, []);
});
