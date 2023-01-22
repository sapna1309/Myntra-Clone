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
import { deleteMensData, getMensData } from "../../Redux/Admin/Admin.action";
import Tablecard from "./Tablecard";

const MensPage = () => {
  const MensData = useSelector((store) => store.adminManager.mensData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensData());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMensData(id)).then(()=>dispatch(getMensData()))
  };

  const handleUpdate = () => {};

  //console.log("Mens",MensData);
  return (
    <Box bg={"gray.100"} width={"100%"}>
      <AdminNavbar />
      <Box style={{ width: "83%", marginLeft: "250px", marginTop: "80px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead bg={"#990578"}>
              <Tr>
                <Th color={"white"}>So No.</Th>
                <Th color={"white"}>Image</Th>
                <Th color={"white"}>Title</Th>
                <Th color={"white"}>Brand</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Strike Price</Th>
                <Th color={"white"}>Edit Price</Th>
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

export default MensPage;
