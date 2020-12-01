import React from "react";

import MenuItem from "../menu-item/menu-item.component";

const section = [
  {
    title: "hats",
    imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2TS3qJ-6nK_2p8hqh4Y0AsnjCoqMpy5IAg&usqp=CAU',
    id: 1
  },

  {
    title: "jackets",
    imageurl: "https://i.bb.co/px2tCc3/jackets.png",
    id: 2
  },

  {
    title: "sneakers",
    imageurl: "https://i.bb.co/0jqHpnp/sneakers.png",
    id: 3
  },

  {
    title: "womens",
    imageurl: "https://i.bb.co/GCCdy8t/womens.png",
    size: 'large',
    id: 4
  },
  {
    title: "Mens",
    imageurl: "https://i.bb.co/R70vBrQ/mens.png",
    size :'large' ,
    id : 5
  },
];

const Directory = () => {
  return section.map(({ title, imageurl, id  ,size}) => (
    <MenuItem key={id} title={title} imageurl={imageurl} size={size} />
  ));
};

export default Directory;