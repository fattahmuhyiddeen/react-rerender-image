import React, { useState, useEffect } from 'react';

export default props => {
  const [is_render_img1, set_is_render_img1] = useState(<img id="camcam1" {...props} />);
  const [is_render_img2, set_is_render_img2] = useState();
  const [is_show_img1, set_is_show_img1] = useState(true);
  const [is_show_img2, set_is_show_img2] = useState(false);
  const refresh = () => {
    console.log('refreshing');
    const time_needed_to_swipe_camera = 6000;

    if (!!is_render_img1) {
      setTimeout(() => {
        set_is_show_img2(true);
        console.log('show display 2');
      }, time_needed_to_swipe_camera);

      setTimeout(() => {
        set_is_show_img1(false);
        set_is_render_img1(false);
        console.log('unmount display 1');
      }, time_needed_to_swipe_camera);

      set_is_render_img2(true);
      console.log('mount display 2');

    } else {
      setTimeout(() => {
        set_is_show_img1(true);
        console.log('show display 1');
      }, time_needed_to_swipe_camera);

      setTimeout(() => {
        set_is_show_img2(false);
        set_is_render_img2(false);
        console.log('unmount display 2');
      }, time_needed_to_swipe_camera);

      set_is_render_img1(true);
      console.log('mount display 1');
    }
  }

  useEffect(() => {
    refresh();
    setInterval(() => refresh(), 12000);
  }, []);

  return <>
    {!!is_render_img1 && <img {...props} style={{ ...props.style, display: is_show_img1 ? 'block' : 'none' }} />}
    {!!is_render_img2 && <img {...props} style={{ ...props.style, display: is_show_img2 ? 'block' : 'none' }} />}
  </>;
}