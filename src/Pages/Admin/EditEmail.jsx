import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, useEditableControls } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from "../../Redux/Admin/Admin.action";

export default function EditEmail({handleEmailSubmit}) {
    const {adminData}=useSelector((store)=>store.adminManager);
    const dispatch =useDispatch();
    const [email,setEmail]=useState("");
    useEffect(()=>{
        dispatch(getAdminData());
    },[dispatch])
    /* Here's a custom control */
    const handleAdmin=()=>{
      handleEmailSubmit(email)
    }
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <Flex justifyContent='flex-end' textAlign='right'>
        <ButtonGroup  size='sm'>
          <IconButton icon={<CheckIcon onClick={handleAdmin} />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
        </Flex>
      ) : (
        <Flex justifyContent='flex-start' pl={3}>
          <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        textAlign='left'
        defaultValue={adminData.email}
        fontSize='xl'
        width={"full"}
        isPreviewFocusable={false}
      >
        <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} value={email} onChange={(e)=>setEmail(e.target.value)} />
        <EditableControls />
      </Editable>
    )
  }