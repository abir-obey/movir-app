
 import AddCircleIcon from '@mui/icons-material/AddCircle';
 import './AddMovie.css';
 import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding:0
};


const AddMovie = ({handleAdd }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [movie, setMovie] = React.useState(
   { id: Math.random(),
    image:"",
    rating: 0,
    name: "",
    date: "",
    type: "",
    description:"",}
  );
  const handleChange=(e)=>{
    setMovie({...movie,[e.target.id]: e.target.value});
  }
   const handleMovie = (e) => {
    // when i wlick to add movie
    // prevent the refresh of the form
    e.preventDefault();
    // sending the data to the app
    handleAdd(movie);
    // setting movie to initial value
    setMovie({
      id: Math.random(),
      name: "",
      image: "",
      date: "",
      rating: 0,
      type: "",
      description: "",
    });
    // close the modal
    handleClose();
  };

  return <div>
    <button className='Add'onClick={handleOpen} style={{margin:20}}>
     <AddCircleIcon />
    </button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
         <div className="form">
      <div className="title">Add Movie</div>
      {/* <div class="subtitle">Let's create your account!</div> */}
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " onChange={handleChange} />
         <div className="cut"></div>
        <label   className="placeholder">Name</label>
      </div>
      <div className="input-container ic1">
        <input id="lastname" className="input" type="date" placeholder=" " onChange={handleChange} />
        <div className="cut"></div>
        <label  className="placeholder">date</label>
      </div>
      <div className="input-container ic1">
        <input id="type" className="input" type="text" placeholder=" " onChange={handleChange} />
        <div className="cut cut-short"></div>
        <label className="placeholder">Type movie</label>
      </div>
      <div className="input-container ic1">
        <input id="rating" className="input" type="number" placeholder=" "onChange={handleChange}  />
        <div className="cut cut-short"></div>
        <label className="placeholder">Rating</label>
      </div>
      <div className="input-container ic1">
        <input id="image" className="input" type="text" placeholder=" "onChange={handleChange}  />
        <div className="cut cut-short"></div>
        <label className="placeholder">Image</label>
      </div>
      <div className="input-container ic1">
        <input id="description" className="input" type="text" placeholder=" "onChange={handleChange}  />
        <div className="cut cut-short"></div>
        <label  className="placeholder">Description</label>
      </div>
      
    
     <button type='submit' onClick={handleMovie} style={{margin:10}}>Add movie</button>
            </div>

            
          </Box>
        </Fade>
      </Modal>
  </div>;
};

export default AddMovie;
