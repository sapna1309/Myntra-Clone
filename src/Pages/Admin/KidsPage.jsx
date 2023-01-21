import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../Components/AdminNavbar";
import { deleteKidsData, getKidsData } from "../../Redux/Admin/Admin.action";
import Tablecard from "./Tablecard";
const KidsPage = () => {
  const KidsData = useSelector((store) => store.adminManager.kidsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKidsData());
  }, []);


  const handleDelete = (id) => {
    dispatch(deleteKidsData(id)).then(()=> dispatch(getKidsData()));
   
  };

  const handleUpdate = () => {};

  return (
    <Box bg={"gray.100"} width={"100%"}>
      <AdminNavbar />
      <Box style={{ width: "83%", marginLeft: "250px", marginTop: "80px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead bg={"#990578"}>
              <Tr>
                <Th color={"white"}>So No.</Th>
                <Th
                  color={"white"}
                  display={{ base: "block", md: "block", sm: "none" }}
                >
                  Image
                </Th>
                <Th color={"white"}>Title</Th>
                <Th color={"white"}>Brand</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Strike Price</Th>
                <Th color={"white"}>Edit Price</Th>
                <Th color={"white"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {KidsData.length !== 0 &&
                KidsData?.map((el, i) => (
                  <Tablecard
                    key={i}
                    {...el}
                    ind={i}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default KidsPage;
