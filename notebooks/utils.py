def generate_filename(name):
    """
    Generating filenames, from original names, that are allowed as filenames
    """
    name = name.replace(" ", "_")
    return "".join(x for x in name if x.isalnum() or x in ["_", "(", ")", "'", "-", "."] )

def generate_chunks(names: list, chunk_size: int = 50) -> list[list]:
    """
    Chunk size set at 50, as that as maximum allowed by fandom api 
    """
    return [names[i:i+chunk_size] for i in range(0, len(names), chunk_size)]
