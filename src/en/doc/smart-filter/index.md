# Smart Filter

## Concept

Smart filter is a feature that allows you to do advanced filtering. For example, you can filter all papers published in 2020, all papers with some tags, or all papers with a specific author, etc.

## Create a smart filter

Simply click the `+` button near the smart filter section in the left sidebar, and you can create a new smart filter.

We provide two ways to create a smart filter:
1. Create a smart filter via the UI.
2. Create a smart filter from an advanced search query string.

### Create a smart filter via the UI

You can create a new rule by clicking the `+` button at the bottom of the smart filter creating window. The `Match` selection box is used to specify the combination matching condition of the rules. For each rule, we have 4 fields:
- `Prefix Ops`: They are useful for collection query and for logical not.
- `Fields`: all query fields.
- `OPs`: operations for the fields.
- `Value`: the value for the rule.


### Create a smart filter from an advanced search query string

For advanced users, you can create a smart filter from an advanced search query string. The query language is from our database library [Realm Query Language](https://www.mongodb.com/docs/realm-sdks/js/latest/tutorial-query-language.html). All available query fields are listed in the `Fields` selection box.

## Case sensitive

All string operations, such as `CONTAINS`, are case insensitive. If you want to ignore case, you can use `CONTAINS[c]`.

## Examples

### Recently added papers
![](/assets/images/guide/smart-filter/recent.png)

To create a dynamic date string, you can use `[x DAYS]`.

### Papers published in CVPR
![](/assets/images/guide/smart-filter/pub.png)

### Papers published by a specific author
![](/assets/images/guide/smart-filter/author.png)

### Papers with multiple tags
![](/assets/images/guide/smart-filter/tag.png)

### Keywords in papers' title
![](/assets/images/guide/smart-filter/title.png)