import { useCallback, useEffect, useState } from "react";
import {
  Modal as MUIModal,
  Container,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useTransaction } from "features/transaction/transactionSlice";
import { Product } from "./productSlice";
import { useCustomer } from "features/customer/customerSlice";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
};

const Modal = ({ product, isOpen, onClose }: ModalProps) => {
  const { onWithdrawal, transaction, onResetRequestStatus } = useTransaction();
  const { onGetWallet } = useCustomer();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    setLoading(true);
    if (product) {
      onWithdrawal({
        productId: product.id,
      });
    }
  }, [onWithdrawal, product]);

  const handleClose = useCallback(() => {
    setLoading(false);
    onResetRequestStatus();
    onClose();
  }, [onClose, onResetRequestStatus]);

  useEffect(() => {
    if (transaction.requestStatus === "fulfilled") {
      onGetWallet();
      handleClose();
    }
  }, [transaction.requestStatus, handleClose, onGetWallet]);

  return (
    <MUIModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container component="main" maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            marginTop: 20,
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {product?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {product?.description}
            </Typography>
            <Button
              autoFocus
              type="button"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit()}
            >
              {loading ? "Carregando..." : "Eu quero"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </MUIModal>
  );
};

export default Modal;
