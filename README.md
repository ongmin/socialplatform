Explanations of the technologies used
A couple of paragraphs about the general approach you took
Installation instructions for any dependencies
GitHub Pull Requests with code review reflecting progress
(Closed) GitHub Issues for any unsolved problems or major hurdles your team had to overcome

# Author data list

A [React](http://facebook.github.io/react/)-based single app page for authors.

## Technologies Used
This application uses the following technologies:
- React
- React Router
- Flux
- Node
- Gulp
- Browserify
- Bootstrap

## Installation
Run the following to install all dependencies:
```
npm install
```
As this single page app uses the Google Maps Places API to get suggests, do make sure that the Google Maps Places API is also in the `<head>` of your HTML:

```html
<!DOCTYPE html>
  <html>
  <head>
    …
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
  </head>
  <body>
    …
  </body>
</html>
```

## License

The MIT License (MIT)
Copyright (c) 2015 Ubilabs <katzki@ubilabs.net>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
