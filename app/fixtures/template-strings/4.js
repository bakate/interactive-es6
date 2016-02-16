// === Template Strings : tagged

const login = 'Roberto<script>alert("p0wned!")</script>'
const comment = '<img src="//haxx0r.net/tracker.png"/> Super article…'

const post = html`<cite>${login}</cite> dit : <blockquote>${comment}</blockquote>`

function html(/* ??? */) {
  return statics.reduce(function(acc, text, index) {
    // ???
  }, '')
}

// === Fonctions d'aide ===

function escapeString(text) {
  return text
    .replace(/&/g, '&amp;')
    // ??? -- traiter aussi '<' => '&lt;'' -- '>' => '&gt;' -- '"' => '&quot;' -- "'" => '&apos;'
}

// === Code de vérification -- ne pas toucher

assertEqual(post, '<cite>Roberto&lt;script&gt;alert(&quot;p0wned!&quot;)&lt;/script&gt;</cite> dit : <blockquote>&lt;img src=&quot;//haxx0r.net/tracker.png&quot;/&gt; Super article…</blockquote>')
