import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {
  FlexColTopCtrDiv,
  FlexRowCtrDiv,
  TitleDiv,
  FlexRowTopCtrDiv,
} from "../../styles/app-style";
import { StandardForm, FormFieldDiv } from "../../styles/form-style";

export const RepoContainer = () => {
  const [animus, setAnimus] = useState([]);
  const [animeName, setAnimeName] = useState("");
  const baseURL = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`;

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent
  ) => {
    e.preventDefault();
    if (animeName.length > 3) {
      axios.get(baseURL).then((response) => {
        console.log(response.data);
        setAnimus(response.data.data);
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimeName(e.target.value);
  };
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <StandardForm onSubmit={handleSubmit}>
      <FlexRowCtrDiv>
        <FormFieldDiv>
          <TextField
            sx={{ padding: 1 }}
            id='animesearch'
            label='Search for an anime'
            defaultValue=''
            variant='filled'
            onChange={handleChange}
          />
        </FormFieldDiv>
        <FormFieldDiv>
          <Button variant='contained' size='large' onClick={handleSubmit}>
            Submit
          </Button>
        </FormFieldDiv>
      </FlexRowCtrDiv>
      <FlexRowTopCtrDiv>
        {animus.length !== 0 &&
          animus.slice(0, 3).map((pic: any) => {
            console.log(pic);
            return (
              <FlexColTopCtrDiv style={{ margin: "1rem" }} key={pic.mal_id}>
                <TitleDiv>{pic.title}</TitleDiv>
                <picture onClick={() => openInNewTab(pic.url)}>
                  <source
                    srcSet={pic.images.webp.image_url}
                    type='image/webp'
                  />
                  <img src={pic.images.jpg.image_url} />
                </picture>
              </FlexColTopCtrDiv>
            );
          })}
      </FlexRowTopCtrDiv>
    </StandardForm>
  );
};

export default RepoContainer;
