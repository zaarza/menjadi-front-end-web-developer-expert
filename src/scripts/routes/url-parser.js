const urlParser = {
  parseActiveUrlWithCombiner() {
    const currentUrl = this._getCurrentUrl();
    const splittedUrl = this._urlSplitter(currentUrl);
    return this._urlCombiner(splittedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const currentUrl = this._getCurrentUrl();
    return this._urlSplitter(currentUrl);
  },

  _getCurrentUrl() {
    return window.location.hash.slice(1).toLowerCase();
  },

  _urlSplitter(url) {
    const urlSplit = url.split('/');
    return {
      resource: urlSplit[0] || null,
      id: urlSplit[1] || null,
      verb: urlSplit[2] || null,
    };
  },

  _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/') + (splittedUrl.id ? '/:id' : '') + (splittedUrl.verb ? `/${splittedUrl.verb}` : '');
  },
};

export default urlParser;
