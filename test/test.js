#!/usr/bin/env node
var assert = require('assert');
var al = require('../lib/autolink.js');

assert.equal(al.autolink("http://google.com/"), '<a href="http://google.com/">http://google.com/</a>');
assert.equal(al.autolink("http://google.com foo"), '<a href="http://google.com">http://google.com</a> foo');
assert.equal(al.autolink("http://google.com/#yay"), '<a href="http://google.com/#yay">http://google.com/#yay</a>');
assert.equal(al.autolink("http://google.com/ yay!"), '<a href="http://google.com/">http://google.com/</a> yay!');
assert.equal(al.autolink("http://google.com/ yay!", "_blank"), '<a href="http://google.com/" target="_blank">http://google.com/</a> yay!');
assert.equal(al.autolink("foo > @yappo heh."), 'foo &gt; @yappo heh.');
assert.equal(al.autolinkTwitter("http://mixi.jp @yappo #foo hoge"), '<a href="http://mixi.jp">http://mixi.jp</a> <a href="http://twitter.com/yappo">@yappo</a> <a href="https://twitter.com/hashtag/foo">#foo</a> hoge');
assert.equal(al.autolinkTwitter("http://mixi.jp @yappo #foo hoge", "_blank"), '<a href="http://mixi.jp" target="_blank">http://mixi.jp</a> <a href="http://twitter.com/yappo" target="_blank">@yappo</a> <a href="https://twitter.com/hashtag/foo" target="_blank">#foo</a> hoge');
assert.equal(al.autolinkTwitter("#にほんご hoge"), '<a href="https://twitter.com/hashtag/%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94">#にほんご</a> hoge');
assert.equal(al.autolinkTwitter("#ニホンゴ hoge"), '<a href="https://twitter.com/hashtag/%E3%83%8B%E3%83%9B%E3%83%B3%E3%82%B4">#ニホンゴ</a> hoge');
assert.equal(al.autolinkTwitter("#日本語 hoge"), '<a href="https://twitter.com/hashtag/%E6%97%A5%E6%9C%AC%E8%AA%9E">#日本語</a> hoge');
assert.equal(al.autolink("'"), '&#39;');

