import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../Components/AdminNavbar";
import { deleteMensData, getMensData, updateMensData } from "../../Redux/Admin/Admin.action";
import Tablecard from "./Tablecard";

const MensPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState('');
  const [StrikePrice, setStrikePrice] = useState('');
  const [discount, setDiscount]=useState('');
  const [id,setId]=useState('');
  const MensData = useSelector((store) => store.adminManager.mensData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensData());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMensData(id)).then(()=>dispatch(getMensData()))
  };

  const handleUpdate=()=> {
    dispatch(updateMensData(id, price, discount, StrikePrice)).then(()=>{
       dispatch(getMensData());
      onClose();
    })
     
 };
const handleOpen=(id)=>{
  setId(id);
  onOpen();
}
  //console.log("Mens",MensData);
  MensData.reverse();
  return (
    <Box bg={"gray.100"} width={"100%"}>
      <AdminNavbar />
      <Box  width={["95%","95%","83%","83%"]} mt={"80px"} ml={[1,1,"250px","250px"]}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink" overflowX={"scroll"}>
            <Thead bg={"#990578"}>
              <Tr>
                <Th color={"white"}>So No.</Th>
                <Th color={"white"}>Image</Th>
                <Th color={"white"}>Title</Th>
                <Th color={"white"}>Brand</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Strike Price</Th>
                <Th color={"white"}>Edit</Th>
                <Th color={"white"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {MensData.length !== 0 &&
                MensData?.map((el, i) => (
                  <Tablecard
                    key={i}
                    {...el}
                    ind={i}
                    handleDelete={handleDelete}
                    handleOpen={handleOpen}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type={"number"}
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Dicscount Price </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"number"}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Strike Amount </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"number"}
                  value={StrikePrice}
                  onChange={(e) => setStrikePrice(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
      </ModalContent>
   </Modal>
      </Box>
    </Box>
  );
};

export default MensPage;
