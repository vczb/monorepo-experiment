import { useEffect, useState } from "react";
import { Box, Container, Paper, Button } from "@mui/material";

import { Wrapper } from "components";
import { useCustomer } from "features/customer/customerSlice";

import { Product, useProduct } from "./productSlice";

import styles from "./List.module.css";
import Modal from "./Modal";
import Item from "./Item";
import Info from "./Info";

export default function List() {
  const { onGetWallet, onResetCustomer } = useCustomer();
  const { product, onList, onResetProduct } = useProduct();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const onFinish = () => {
    onResetProduct();
    onResetCustomer();
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
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
            my: 8,
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Info />
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
              <Item
                key={item.id}
                item={item}
                handleItemClick={handleProductClick}
              />
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
              FINALIZAR
            </Button>
          </Box>
        </Paper>
      </Container>
      <Modal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Wrapper>
  );
}
