import { ImageList, ImageListItem, ImageListItemBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import './ImageListUI.css';
import imgA from "../img/0.jpg";
import imgB from "../img/1.jpg";
import imgC from "../img/2.jpg";
import imgD from "../img/3.jpg";
import imgE from "../img/4.jpg";

function ImageListUI() {
    const itemData = [
        {
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },{
            src: imgA,
            title: "Image",
        },
        {
            src: imgB,
            title: "Image",
        },
        {
            src: imgC,
            title: "Image",
        },
        {
            src: imgD,
            title: "Image",
        },
        {
            src: imgE,
            title: "Image",
        },
    ]

    return (
        <div>
            <ImageList className="imageList" rowHeight={160} cols={3}>
                {itemData.map((item) => (
                    <ImageListItem key={item.src} cols={item.cols || 1}>
                        <img src={item.src} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle="by bm"
                            actionIcon={
                                <IconButton aria-label={`info about ${item.title}`}>
                                    <InfoIcon className="icon"/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default ImageListUI
