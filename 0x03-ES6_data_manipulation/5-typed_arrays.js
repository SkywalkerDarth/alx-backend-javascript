export default function createInt8TypedArray(length, position, value) {
  // Checks if position is within the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Creates a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Creates a new Int8Array to enable us work on it
  const int8Array = new Int8Array(buffer);

  // Sets the value at the specified position
  int8Array[position] = value;

  // Return the ArrayBuffer i.e buffer
  return buffer;
}
