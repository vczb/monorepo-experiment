import { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

import { Wrapper } from "components";
import { useCustomer } from "features/customer/customerSlice";
import { Diamond } from "icons";

import { Product, useProduct } from "./productSlice";

import styles from "./List.module.css";

export default function List() {
  const { onGetWallet, customer, onResetCustomer } = useCustomer();
  const { product, onList, onResetProduct } = useProduct();

  const onFinish = () => {
    onResetProduct();
    onResetCustomer();
  };

  useEffect(() => {
    onGetWallet();
    onList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper fullVH>
      <Container component="main" maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            marginTop: 8,
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "400",
              }}
              color={"primary.dark"}
            >
              Produtos
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Saldo</Typography>
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
                <Box
                  sx={{
                    height: 20,
                    width: 20,
                  }}
                >
                  <Diamond />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "500",
                  }}
                  color={"primary.dark"}
                >
                  {(!!customer?.wallet && customer.wallet.diamonds) || 0}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            color={"grey.300"}
            sx={{
              my: 2,
              px: 1,
            }}
            className={styles.divider}
          />
          <Box
            sx={{
              maxHeight: "30rem",
              overflowY: "auto",
              px: 1,
            }}
          >
            {product.products.map((item: Product) => (
              <Card
                key={item.id}
                sx={{
                  maxHeight: 150,
                  display: "flex",
                  width: "100%",
                  mb: 1,
                  cursor: "pointer",
                }}
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
            ))}
          </Box>
          <Box
            color={"grey.300"}
            sx={{
              my: 2,
              px: 1,
            }}
            className={styles.divider}
          />
          <Box sx={{ my: 2, display: "flex", width: "100%" }}>
            <Button
              type="button"
              onClick={() => onFinish()}
              variant="outlined"
              fullWidth
              sx={{ margin: "auto", maxWidth: "25rem" }}
            >
              CONCLUIR
            </Button>
          </Box>
        </Paper>
      </Container>
    </Wrapper>
  );
}
