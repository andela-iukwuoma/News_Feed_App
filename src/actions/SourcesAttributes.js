/**
 * @desc contains methods that extract relevant fields
 * from the data received the news API.
 *
 * @class SourcesAttributes
 */
class SourcesAttributes {
  /**
   * Creates an instance of SourcesAttributes with a sources property.
   *
   * @memberof SourcesAttributes
   */
  constructor() {
    this.sources = [];
  }

  /**
   * @desc extract specific data fields from data received from the API end point.
   * @returns {void}
   * @param {string} index  represents the name of the news source.
   *  Useful when iterating through the array of news sources.
   * @param {string} id represents the name of the news source.
   * @param {string} name represents the full name of the news source.
   * @param {string} description represents a brief description of the news source.
   * @param {string} category represents the category of news primarily covered by the news source.
   * @param {string} sortBysAvailable represents the sort options available on this news source.
   *
   * @memberof SourcesAttributes
   */
  add(index, id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/articles/${id}`,
      id: index,
      header: name,
      description,
      category,
      title: name,
      sortBysAvailable,
    });
  }

  /**
   * @desc returns the value of the sources property everytime it is called.
   *
   * @returns {object} array containing all news sources
   *
   * @memberof SourcesAttributes
   */
  get() {
    return this.sources;
  }

}

export default SourcesAttributes;
