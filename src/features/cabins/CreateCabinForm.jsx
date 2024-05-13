import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: idToEdit, ...cabinInfo } = cabinToEdit;

  const editSession = Boolean(idToEdit);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editSession ? cabinInfo : {},
  });

  const { errors } = formState;

  const { createNewCabin, isCreating } = useCreateCabin();

  const { editCabin, isEditing } = useEditCabin();
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (!editSession)
      createNewCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      editCabin(
        { newCabinData: { ...data, image: image }, id: idToEdit },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors.name || ""}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required !",
          })}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors.maxCapacity || ""}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required !",
            min: {
              value: 1,
              message: "the room should take at least 1 guest !",
            },
          })}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors.regularPrice || ""}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required !",
            validate: (value) =>
              value > 0 || "The price can not be less than 0 !",
          })}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Discount" error={errors.discount || ""}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required !",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "the discount can not be less than the regular price !",
          })}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Description for website" error={errors.description || ""}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required !",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors.discount || ""}>
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}

        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{`${
          editSession ? "edit cabin" : " add cabin"
        }`}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
