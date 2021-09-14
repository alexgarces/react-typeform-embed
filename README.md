# React Typeform Embed

A React wrapper for [Typeform Embed SDK](https://developer.typeform.com/embed/).

[See a live demo](https://alexgarces.github.io/react-typeform-embed/).

## Upgrading from [v.0.3](https://github.com/alexgarces/react-typeform-embed/tree/v0.3)

**Important:** Please be aware that if you are updating this package from a version previous to `v.1.0` you will need to apply changes in your implementation.

## Usage

First install the package

```bash
yarn add react-typeform-embed
```

There are [five different embed types](https://developer.typeform.com/embed/vanilla/#embed-types) that you can import as components.

- Widget
- Popup
- Slider
- Sidetab
- Popover

### Widget

With the **widget embed type** you can embed your form inline, in a DOM element.

```js
import { Widget } from 'react-typeform-embed';

const App = () => {
  render() {
    return <Widget id="njdbt5" height={500} />;
  }
}
```

### Popup and Slider

With the **popup and slider embed types** you can embed the form in a modal. You need to pass as children the element/s that will open the modal when clicked.

```js
import { Popup /* or Slider */ } from 'react-typeform-embed';

const App = () => {
  return (
    <Popup id="njdbt5" size={80}>
      <button>Open Popup</button>
    </Popup>
  );
}
```

### Sidetab and Popover

These other **modal embed types** work exactly as the Popup component but, since they are already visible and clickable, passing children element/s is optional.

```js
import { Sidetab /* or Popover */ } from 'react-typeform-embed';

const App = () => {
  return <Sidetab id="njdbt5">
}
```

[See the source](https://github.com/alexgarces/react-typeform-embed/tree/master/src/examples) for more examples.

## Configuration

You need to provide the **form id** as **id** prop.

You can get the id from the public URL of your form URL (`https://form.typeform.com/to/<form-id>`) or admin panel URL (`https://admin.typeform.com/form/<form-id>`).

You can also use any other option and callback from [the official SDK](https://developer.typeform.com/embed/) passing them as props. Find more info here:

- [Available Options](https://developer.typeform.com/embed/configuration/#available-options)
- [Callback Functions](https://developer.typeform.com/embed/callbacks/)

```js
<Widget
  id="your-form-id"
  height={400}
  opacity={80}
  hidden={{
    userId: 'hidden-user-id'
  }}
  onSubmit={() => {
    console.log('Form submitted!')
  }}
  hideHeaders
  disableAutoFocus
  enableSandbox
/>
```

## Demo

See a [live demo](https://alexgarces.github.io/react-typeform-embed/), or run:

```bash
git clone https://github.com/alexgarces/react-typeform-embed
cd react-typeform-embed
yarn
yarn start
open http://localhost:3000
```

## Alternatives

- Official [Typeform React Embed Library](https://github.com/Typeform/embed/tree/main/packages/embed-react)


### License

Code released under the [MIT license](LICENSE.txt).
