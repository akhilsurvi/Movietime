import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips({info}) {
    const map1 = new Map();

  map1.set(28, "Action");
  map1.set(12,"Adventure");
  map1.set(16,"Animation");
  map1.set(35,"Comedy");
  map1.set(80,"Crime");
  map1.set(99,"Documentary");
  map1.set(18,"Drama");
  map1.set(10751,"Family");
  map1.set(14,"Fantasy");
  map1.set(36,"History");
  map1.set(27,"Horror");
  map1.set(10402,"Music");
  map1.set(9648,"Mystery");
  map1.set(10749,"Romance");
  map1.set(878,"Science Fiction");
  map1.set(10770,"TV Movie");
  map1.set(53,"Thriller");
  map1.set(10752,"War");
  map1.set(37,"Western");
  

  return (
    <Stack direction="row" spacing={1}>
        {console.log(info.genre_ids)}
      {info.genre_ids.length>0 && <Chip label={map1.get(info.genre_ids[0])} variant="outlined" sx={{bgcolor:"black",color:"white"}} />}
      {info.genre_ids.length>1 && <Chip label={map1.get(info.genre_ids[1])} variant="outlined" sx={{bgcolor:"black",color:"white"}} />}
    </Stack>
  );
}