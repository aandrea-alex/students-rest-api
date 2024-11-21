import { StudentsCollection } from '../../db/models/student.js';

export const updateStudent = async (id, payload, options = {}) => {
  const rawResult = await StudentsCollection.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
