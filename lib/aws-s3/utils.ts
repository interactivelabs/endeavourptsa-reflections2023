export const getUploadUrl = (
  file: File,
  kindOfFile: string,
  studentName: string,
  category: string,
) =>
  `/api/uploadUrl?studentName=${encodeURIComponent(
    studentName,
  )}&category=${encodeURIComponent(category)}&filetype=${encodeURIComponent(
    file.type,
  )}&name=${encodeURIComponent(file.name)}&kindOfFile=${kindOfFile}`;
