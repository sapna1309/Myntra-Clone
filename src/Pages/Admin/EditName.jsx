import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, useEditableControls } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from "../../Redux/Admin/Admin.action";

export default function EditName({handleNameSubmit}) {
    const {adminData}=useSelector((store)=>store.adminManager);
    const dispatch =useDispatch();
    const [name,setName]=useState("");
    useEffect(()=>{
        dispatch(getAdminData());
    },[dispatch])
    /* Here's a custom control */
    const handleAdmin=()=>{
      handleNameSubmit(name)
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
        defaultValue={adminData.name}
        fontSize='xl'
        width={"full"}
        isPreviewFocusable={false}
      >
        <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} value={name} onChange={(e)=>setName(e.target.value)} />
        <EditableControls />
      </Editable>
    )
  }