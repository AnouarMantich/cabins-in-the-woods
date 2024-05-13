import supabase, { supabaseUrl } from "./supabase";

export async function getAllCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Error while loading cabins");
  }

  return cabins;
}

export async function createCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // https://rhogkehlmmougikfapbv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `https://rhogkehlmmougikfapbv.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  // create/edit cabin
  let query = supabase.from("cabins");
  //  1 - create

  // 1- crating the cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Error while loading cabins");
  }

  if (hasImagePath) return data;
  // 2-upload the image
  const { error: uploadingError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3- if there was an error while uploading image , delete cabin
  if (uploadingError) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);
    if (uploadingError) {
      console.log(uploadingError);
      throw new Error("Error while uploading image");
    }
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
