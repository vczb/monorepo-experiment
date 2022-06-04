import { useCallback } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Diamond } from "icons";
import { Product } from "./productSlice";

type ItemProps = {
  item: Product;
  handleItemClick: (item: Product) => void;
};

const Item = ({ item, handleItemClick }: ItemProps) => {
  const handleClick = useCallback(
    (item) => {
      if (handleItemClick) {
        handleItemClick(item);
      }
    },
    [handleItemClick]
  );

  return (
    <Card
      key={item.id}
      sx={{
        maxHeight: 150,
        display: "flex",
        width: "100%",
        mb: 1,
        cursor: "pointer",
      }}
      onClick={() => handleClick(item)}
    >
      <CardMedia
        sx={{
          maxWidth: "15rem",
        }}
        component="img"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.shortDescription}
        </Typography>
      </CardContent>
      <Box
        sx={{
          marginLeft: "auto",
          minWidth: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        color={"primary.dark"}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
          }}
          color={"primary.dark"}
        >
          {item.priceInDiamonds}
        </Typography>
        <Box
          sx={{
            height: 20,
            width: 20,
          }}
        >
          <Diamond />
        </Box>
      </Box>
    </Card>
  );
};

export default Item;
