#!/bin/sh
# Après produire.mjs : les images Grok vont dans assets/images/grok/ (mention « Illustration générée »).
cd "$(dirname "$0")/../.." || exit 1
for n in atelier-ouverture atelier-detail equipement; do
  for f in assets/images/$n-*.webp; do [ -e "$f" ] && mv -f "$f" assets/images/grok/; done
done
