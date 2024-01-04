# Service Events

Almost all services in the API are `Eventable`. This means that each service will emit some events at different times. Other code locations and processes can listen for corresponding event to execute their own code. For example, you can listen for changes in the user's selected paper, and then run your own methods, etc.

## Listening to Events

The method to listen to events is `on`. It accepts two arguments, the first is the event name, and the second is the callback function. The parameters of the callback function are the parameters passed when the event is emitted.


```typescript
import { PLAPI } from 'paperlib-api';


PLAPI.serviceName.on('event-id', (newValue: {key: string, value: any}) => {
    ...
});
```

The arguments received by the callback function are usually an object, which includes `key` and `value` fields. `key` is the event ID, and `value` is the corresponding new value.

You can register the same callback function for multiple events:

```typescript
PLAPI.serviceName.on(
    ['event-id-1', 'event-id-2'],
    (newValue: {key: string, value: any}) => {
    ...
    }
);
```

Here, the `key` field will help you determine which event was emitted.

## Cancel Listening

Please note that you need to save the function returned by the `on` method so that you can cancel the listening when you don't need it.

```typescript
const cancel = PLAPI.serviceName.on('event-id', (newValue: {key: string, value: any}) => {
    ...
});

// Cancel listening
cancel();
```

## Aliases

For some services, we provide some aliases for `on()` function to make it easier to write code.

For example, in `preferenceService`, we provide a `onChanged()` method, which has the same effect as `on()`. It is just an alias.

## Service Event List

Different services have different events. For the specific event list, please refer to the corresponding service documentation.

If the existing events cannot meet your needs, you can also submit an issue to us on Github, and we will consider adding new events.