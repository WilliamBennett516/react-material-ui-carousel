# React Material UI Carousel

This project was bootstrapped with [Create React Library](https://github.com/udilia/create-react-library).

## Description

A Generic, extendible Carousel UI component for React using [Material UI](https://material-ui.com/)  
It switches between given children using a smooth animation.  
Provides next and previous buttons.
Also provides interactible bullet indicators.

## Installation

```shell
npm install react-material-ui-carousel --save
```

## Usage Example

```jsx
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core'

function Example(props)
{
    var items = [
        {
            name: "Random Name #1"
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( item => {
                    <Item item={item}>
                })
            }
        <Carousel/>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        <Paper/>
    )
}
```

## Props

| Prop name  | Type              | Default | Description                                                              |
| ---------- | ----------------- | ------- | ------------------------------------------------------------------------ |
| className  | string            | ""      | Defines custom class name(s), that will be **added** to Carousel element |
| autoPlay   | boolean           | true    | Defines if the component will auto scroll between children               |
| interval   | number            | 4000    | Defines the interval in **ms** between active child changes (autoPlay)   |
| indicators | boolean           | true    | Defines the existence of bullet indicators                               |
| animation  | {"fade", "slide"} | "fade"  | Defines the animation style of the Carousel                              |

## License

The MIT License.

## Author

[Learus](learus.github.io)