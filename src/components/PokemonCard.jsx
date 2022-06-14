import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function PokemonCard() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/pokemon/1");
  };

  return (
    <Card sx={{ maxWidth: 250, margin: "1rem" }}>
      <CardMedia
        component="img"
        height="130"
        image="https://static.posters.cz/image/1300/poster/pokemon-pikachu-neon-i71936.jpg"
        alt="pikachu"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pikachu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pikachu are mammal-like creatures that have short, yellow fur with
          brown stripes on their backs, black-tipped ears, and an unusually
          shaped tail, resembling a lightning bolt.
        </Typography>
        <CardActions sx={{ float: "right" }}>
          <Button onClick={handleRedirect}>Detail</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
