## Default values



All SSZ Types have a default "zeroed" value



- `Uint`: 0
- `Boolean`: False
- `Vector`: Sequence of default values
- `List`: Empty List 
- `Container`: Default value for each type in container
- `Union`: Default value of "Type_0"
  



Default values are *recursive*; elements in composite types such as containers are initialized with their respective default initializations

#### `is_zero`

An SSZ object is called zeroed (and thus, `is_zero(object)` returns true) if it is equal to the default value for that type.

### Illegal types

- Empty vector types (`Vector[type, 0]`, `Bitvector[0]`) are illegal.
- Containers with no fields are illegal.
- The `null` type is only legal as the first type in a union subtype (i.e. with type index zero).