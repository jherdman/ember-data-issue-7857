import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import defaultScenario from '../../mirage/scenarios/default';

module('Acceptance | reproduction', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('issue 7857', async function (assert) {
    defaultScenario(this.server);

    await visit('/document');

    assert.dom('p').hasText('I do not have a bookmark');

    await click('button');

    assert.dom('p').hasText('I have a bookmark');

    await click('button');

    assert.dom('p').hasText('I do not have a bookmark');

    await click('button');

    assert.dom('p').hasText('I have a bookmark');

    await click('button');

    assert.dom('p').hasText('I do not have a bookmark');
  });
});
