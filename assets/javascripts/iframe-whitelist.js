(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/embed\.spotify\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.discordapp\.com\/.+/i);
})();

