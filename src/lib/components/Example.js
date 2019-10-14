import React from 'react';
import Carousel from "./Carousel"
import autoBind from "auto-bind"
import './Example.css';

import { Card, CardContent, CardMedia, Typography, Grid, Button, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl } from '@material-ui/core';

function Banner(props)
{
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )

    
    for (let i = 0; i < mediaLength; i++)
    {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                {/* <Link href={`/item/${item.Id}`} className="Link"> */}
                    <CardMedia
                        onClick={() => {props.pressImage(item);}}
                        className="Media"
                        image={item.Image}
                        title={item.Name}
                    >
                        <Typography className="MediaCaption">
                            {item.Name}
                        </Typography>
                    </CardMedia>
                {/* </Link> */}
                
            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left")
    {
        items.unshift(content);
    }
    else if (contentPosition === "right")
    {
        items.push(content);
    }
    else if (contentPosition === "middle")
    {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
  {
      Name: "Electronics",
      Caption: "Electrify your friends!",
      contentPosition: "left",
      Items: [
          {
              Name: "Macbook Pro",
              Image: "https://source.unsplash.com/featured/?macbook"
          },
          {
              Name: "iPhone",
              Image: "https://source.unsplash.com/featured/?iphone"
          }
      ]
  },
  {
      Name: "Home Appliances",
      Caption: "Say no to manual home labour!",
      contentPosition: "middle",
      Items: [
          {
              Name: "Washing Machine WX9102",
              Image: "https://source.unsplash.com/featured/?washingmachine"
          },
          {
              Name: "Learus Vacuum Cleaner",
              Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
          }
      ]
  },
  {
      Name: "Decoratives",
      Caption: "Give style and color to your living room!",
      contentPosition: "right",
      Items: [
          {
              Name: "Living Room Lamp",
              Image: "https://source.unsplash.com/featured/?lamp"
          },
          {
              Name: "Floral Vase",
              Image: "https://source.unsplash.com/featured/?vase"
          }
      ]
  }
]

class BannerExample extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "fade",
            indicators: true
        }

        autoBind(this);
    }

    toggleAutoPlay()
    {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators()
    {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    changeAnimation(event)
    {
        this.setState({
            animation: event.target.value
        })
    }

    render()
    {
        return (
            <div>
                <FormLabel component="legend">Options</FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleAutoPlay} checked={this.state.autoPlay} value="autoplay"/>
                    }
                    label="Auto-play"
                    // labelPlacement="start"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleIndicators} checked={this.state.indicators} value="indicators"/>
                    }
                    label="Indicators"
                    // labelPlacement="start"
                />

                
                <FormLabel component="legend">Animation</FormLabel>
                <FormControlLabel
                    control={
                        <RadioGroup name="animation" value={this.state.animation} onChange={this.changeAnimation}>
                            <FormControlLabel value="fade" control={<Radio/>} label="Fade"/>
                            <FormControlLabel value="slide" control={<Radio/>} label="Slide"/>
                        </RadioGroup>
                    }
                />
                
                
                <Carousel 
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                >
                {
                    items.map( (item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
                    })
                }
                </Carousel>
            </div>
            
        )
    }
}

export default BannerExample;
