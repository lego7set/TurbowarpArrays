

class TurbowarpArrays {

  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'turbowarparrays',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Arrays',

      blocks: [
        {
          opcode: 'getemptyarray',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Empty Array'
        }
      ]
    };
  }


  getemptyarray() {

    return [];
  }
}

Scratch.extensions.register(new TurbowarpArrays());
