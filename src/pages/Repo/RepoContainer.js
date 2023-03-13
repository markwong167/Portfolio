import { Button, TextField } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  StandardForm,
  CustomInputDiv,
  FormFieldDiv,
} from "../../styles/form-style";

export const RepoContainer = (props) => {
  const [animus, setAnimus] = useState([]);
  const [animeName, setAnimeName] = useState("");
  const baseURL = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animeName.length > 3) {
      axios.get(baseURL).then((response) => {
        console.log(response.data);
        setAnimus(response.data.data);
      });
    }
  };
  const handleChange = (e) => {
    setAnimeName(e.target.value);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <StandardForm>
      <FormFieldDiv>
        <CustomInputDiv>
          <TextField
            id='animesearch'
            label='Search for an anime'
            defaultValue=''
            variant='filled'
            onChange={handleChange}
          />
        </CustomInputDiv>
      </FormFieldDiv>
      <FormFieldDiv>
        <Button variant='contained' size='large' onClick={handleSubmit}>
          Submit
        </Button>
      </FormFieldDiv>
      {animus.length !== 0 &&
        animus.slice(0, 3).map((pic) => {
          return (
            <picture key={pic.mal_id} onClick={() => openInNewTab(pic.url)}>
              <source srcSet={pic.images.webp.image_url} type='image/webp' />
              <img src={pic.images.jpg.image_url} type='image' />
            </picture>
          );
        })}
    </StandardForm>
  );
};

RepoContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer);
