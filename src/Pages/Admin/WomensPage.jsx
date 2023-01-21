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
import { deleteWomensData, getWomensData } from "../../Redux/Admin/Admin.action";
import Tablecard from "./Tablecard";
const WomensPage = () => {
  const WomensData = useSelector((store) => store.adminManager.womensData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomensData());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteWomensData(id)).then(()=>dispatch(getWomensData()));
  };

  const handleUpdate = () => {};

  //console.log("Womens",WomensData);
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
              {WomensData.length !== 0 &&
                WomensData?.map((el, i) => (
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

export default WomensPage;
