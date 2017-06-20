var searchIndex = {};
searchIndex["tobj"] = {"doc":"Tiny OBJ loader, inspired by Syoyo's excellent tinyobjloader. Aims to be a simple and lightweight option for loading OBJ files, just returns two vecs containing loaded models and materials. All models are made of triangles, any quad or polygon faces in an OBJ file will be converted to triangles. Note that only polygons that are trivially convertible to triangle fans are supported, arbitrary polygons may not behave as expected. The best solution would be to re-export your mesh using only triangles in your modeling software.","items":[[3,"Mesh","tobj","A mesh made up of triangles loaded from some OBJ file",null,null],[12,"positions","","Flattened 3 component floating point vectors, storing positions of vertices in the mesh",0,null],[12,"normals","","Flattened 3 component floating point vectors, storing normals of vertices in the mesh. Not all meshes have normals, if no normals are specified this Vec will be empty",0,null],[12,"texcoords","","Flattened 2 component floating point vectors, storing texture coordinates of vertices in the mesh. Not all meshes have normals, if no texture coordinates are specified this Vec will be empty",0,null],[12,"indices","","Indices for vertices of each triangle. Each face in the mesh is a triangle and the indices specify the position, normal and texture coordinate for each vertex of the face.",0,null],[12,"material_id","","Optional material id associated with this mesh. The material id indexes into the Vec of Materials loaded from the associated MTL file",0,null],[3,"Model","","A named model within the file, associates some mesh with a name that was specified with an `o` or `g` keyword in the OBJ file",null,null],[12,"mesh","","Mesh used by the model containing its geometry",1,null],[12,"name","","Name assigned to this mesh",1,null],[3,"Material","","A material that may be referenced by one or more meshes. Standard MTL attributes are supported. Any unrecognized parameters will be stored as key-value pairs in the `unknown_param` `HashMap`, which maps the unknown parameter to the value set for it.",null,null],[12,"name","","Material name as specified in the MTL file",2,null],[12,"ambient","","Ambient color of the material",2,null],[12,"diffuse","","Diffuse color of the material",2,null],[12,"specular","","Specular color of the material",2,null],[12,"shininess","","Material shininess attribute",2,null],[12,"dissolve","","Dissolve attribute is the alpha term for the material. Referred to as dissolve since that's what the MTL file format docs refer to it as",2,null],[12,"optical_density","","Optical density also known as index of refraction. Called optical_density in the MTL specc. Takes on a value between 0.001 and 10.0. 1.0 means light does not bend as it passed through the object.",2,null],[12,"ambient_texture","","Name of the ambient texture file for the material. No path is pre-pended to the texture file names specified in the MTL file",2,null],[12,"diffuse_texture","","Name of the diffuse texture file for the material. No path is pre-pended to the texture file names specified in the MTL file",2,null],[12,"specular_texture","","Name of the specular texture file for the material. No path is pre-pended to the texture file names specified in the MTL file",2,null],[12,"normal_texture","","Name of the normal map texture file for the material. No path is pre-pended to the texture file names specified in the MTL file",2,null],[12,"dissolve_texture","","Name of the alpha map texture file for the material. No path is pre-pended to the texture file names specified in the MTL file. Referred to as dissolve to match the MTL file format specification",2,null],[12,"illumination_model","","The illumnination model to use for this material. The different illumnination models are specified in http://paulbourke.net/dataformats/mtl/",2,null],[12,"unknown_param","","Key value pairs of any unrecognized parameters encountered while parsing the material",2,null],[4,"LoadError","","Possible errors that may occur while loading OBJ and MTL files",null,null],[13,"OpenFileFailed","","",3,null],[13,"ReadError","","",3,null],[13,"UnrecognizedCharacter","","",3,null],[13,"PositionParseError","","",3,null],[13,"NormalParseError","","",3,null],[13,"TexcoordParseError","","",3,null],[13,"FaceParseError","","",3,null],[13,"MaterialParseError","","",3,null],[13,"InvalidObjectName","","",3,null],[13,"GenericFailure","","",3,null],[5,"load_obj","","Load the various objects specified in the OBJ file and any associated MTL file Returns a pair of Vecs containing the loaded models and materials from the file.",null,{"inputs":[{"name":"path"}],"output":{"name":"loadresult"}}],[5,"load_mtl","","Load the materials defined in a MTL file Returns a pair with a `Vec` holding all loaded materials and a `HashMap` containing a mapping of material names to indices in the Vec.",null,{"inputs":[{"name":"path"}],"output":{"name":"mtlloadresult"}}],[5,"load_obj_buf","","Load the various meshes in an OBJ buffer of some kind, e.g. a network stream, text file already in memory or so on.",null,{"inputs":[{"name":"b"},{"name":"ml"}],"output":{"name":"loadresult"}}],[5,"load_mtl_buf","","Load the various materials in a MTL buffer",null,{"inputs":[{"name":"b"}],"output":{"name":"mtlloadresult"}}],[5,"print_model_info","","Print out all loaded properties of some models and associated materials",null,null],[5,"print_material_info","","Print out all loaded properties of some materials",null,null],[6,"LoadResult","","`LoadResult` is a result containing all the models loaded from the file and any materials from referenced material libraries, or an error that occured while loading",null,null],[6,"MTLLoadResult","","`MTLLoadResult` is a result containing all the materials loaded from the file and a map of MTL name to index or the error that occured while loading",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"mesh"}}],[11,"new","","Create a new mesh specifying the geometry for the mesh",0,{"inputs":[{"name":"vec"},{"name":"vec"},{"name":"vec"},{"name":"vec"},{"name":"option"}],"output":{"name":"mesh"}}],[11,"empty","","Create a new empty mesh",0,{"inputs":[],"output":{"name":"mesh"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"model"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new model, associating a name with a mesh",1,{"inputs":[{"name":"mesh"},{"name":"string"}],"output":{"name":"model"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"material"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"empty","","",2,{"inputs":[],"output":{"name":"material"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[3,"Mesh"],[3,"Model"],[3,"Material"],[4,"LoadError"]]};
initSearch(searchIndex);
