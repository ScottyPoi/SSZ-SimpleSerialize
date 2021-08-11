<!-- ## Representation




#### Mapping _valid_ instances of the same type to a byte sequence is *bijective*:




- **Serialization:** Any two different values _of the same type_ cannot have the same representation.  

- **Deserialization:** Any _valid_ representation _of a given type_ cannot be interpreted as two different values _of that same type_:




#### Mapping _any_ instance of a type to any byte sequence is _injective and non-surjective_:




- **Serialization:** All type instantiations can be serialized to a unique (to the type) value.
- **Deserialization:** not all byte sequences are a valid representation for a given type, because of constraints such as:



  - representation length (See [fixed length](../overview/fixed_variable_size.md))
  - element count (See [list limits](./overview/complex.md#list-limits))
  - [element offsets](../overview/sequences.md#offsets)
  - delimiters (See [bitlists](./overview/bitfields.md#bitlist))
  - selectors (See [union](./overview/union.md))
  - more, this is not an exhaustive list.
 -->
