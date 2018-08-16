var {ObjectID} = require('mongodb');
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;





var PhotoSchema = new Schema({
  photoPath: {
    type: String,
    required: true
  },
  seatNumber: {
    type: Number,
    required: true
  },
  seatRow: {
    type: String,
    required: true
  },
  seatRank: Number,
  uploadDate: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  comment: String,
  section: {
    type: Number,
    required: true
  },
  stadium: {
    type: String,
    required: true
  }
});

var SectionSchema = new Schema({
    sectionURL: {
    type: String,
    required: true,
    unique: true
  },
  sectionNumber: {
    type: Number,
    required: true
  },
});


var StadiumSchema = new Schema({
  stadiumName: {
    type: String,
    required: true,
    unique: true
  },
  stadiumPath: {
    type: String,
    required: true,
    unique: true
  },
  sections: [SectionSchema]
});











var glp = { "_id": new ObjectID(),
            "stadiumName": "Global Life Park",
            "stadiumPath": "/images/glpstadium.png",
            "sections": [
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/3", "sectionNumber": 3},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/4", "sectionNumber": 4},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/5", "sectionNumber": 5},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/6", "sectionNumber": 6},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/7", "sectionNumber": 7},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/8", "sectionNumber": 8},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/9", "sectionNumber": 9},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/10", "sectionNumber": 10},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/11", "sectionNumber": 11},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/12", "sectionNumber": 12},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/13", "sectionNumber": 13},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/14", "sectionNumber": 14},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/15", "sectionNumber": 15},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/16", "sectionNumber": 16},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/17", "sectionNumber": 17},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/18", "sectionNumber": 18},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/19", "sectionNumber": 19},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/20", "sectionNumber": 20},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/21", "sectionNumber": 21},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/22", "sectionNumber": 22},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/23", "sectionNumber": 23},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/24", "sectionNumber": 24},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/25", "sectionNumber": 25},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/26", "sectionNumber": 26},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/27", "sectionNumber": 27},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/28", "sectionNumber": 28},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/29", "sectionNumber": 29},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/30", "sectionNumber": 30},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/31", "sectionNumber": 31},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/32", "sectionNumber": 32},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/33", "sectionNumber": 33},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/34", "sectionNumber": 34},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/35", "sectionNumber": 35},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/36", "sectionNumber": 36},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/37", "sectionNumber": 37},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/38", "sectionNumber": 38},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/39", "sectionNumber": 39},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/40", "sectionNumber": 40},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/41", "sectionNumber": 41},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/42", "sectionNumber": 42},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/43", "sectionNumber": 43},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/44", "sectionNumber": 44},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/45", "sectionNumber": 45},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/46", "sectionNumber": 46},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/47", "sectionNumber": 47},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/48", "sectionNumber": 48},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/49", "sectionNumber": 49},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/50", "sectionNumber": 50},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/51", "sectionNumber": 51},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/52", "sectionNumber": 52},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/53", "sectionNumber": 53},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/54", "sectionNumber": 54},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/112", "sectionNumber": 112},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/113", "sectionNumber": 113},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/114", "sectionNumber": 114},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/115", "sectionNumber": 115},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/116", "sectionNumber": 116},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/117", "sectionNumber": 117},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/118", "sectionNumber": 118},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/119", "sectionNumber": 119},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/120", "sectionNumber": 120},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/121", "sectionNumber": 121},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/122", "sectionNumber": 122},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/123", "sectionNumber": 123},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/124", "sectionNumber": 124},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/125", "sectionNumber": 125},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/126", "sectionNumber": 126},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/127", "sectionNumber": 127},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/128", "sectionNumber": 128},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/129", "sectionNumber": 129},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/130", "sectionNumber": 130},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/131", "sectionNumber": 131},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/132", "sectionNumber": 132},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/133", "sectionNumber": 133},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/134", "sectionNumber": 134},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/135", "sectionNumber": 135},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/136", "sectionNumber": 136},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/137", "sectionNumber": 137},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/138", "sectionNumber": 138},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/139", "sectionNumber": 139},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/201", "sectionNumber": 201},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/202", "sectionNumber": 202},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/203", "sectionNumber": 203},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/204", "sectionNumber": 204},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/205", "sectionNumber": 205},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/206", "sectionNumber": 206},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/207", "sectionNumber": 207},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/208", "sectionNumber": 208},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/209", "sectionNumber": 209},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/210", "sectionNumber": 210},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/211", "sectionNumber": 211},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/212", "sectionNumber": 212},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/213", "sectionNumber": 213},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/214", "sectionNumber": 214},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/215", "sectionNumber": 215},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/216", "sectionNumber": 216},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/217", "sectionNumber": 217},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/218", "sectionNumber": 218},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/219", "sectionNumber": 219},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/220", "sectionNumber": 220},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/221", "sectionNumber": 221},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/222", "sectionNumber": 222},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/223", "sectionNumber": 223},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/224", "sectionNumber": 224},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/225", "sectionNumber": 225},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/226", "sectionNumber": 226},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/227", "sectionNumber": 227},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/228", "sectionNumber": 228},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/229", "sectionNumber": 229},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/230", "sectionNumber": 230},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/231", "sectionNumber": 231},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/232", "sectionNumber": 232},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/233", "sectionNumber": 233},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/234", "sectionNumber": 234},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/235", "sectionNumber": 235},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/236", "sectionNumber": 236},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/237", "sectionNumber": 237},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/238", "sectionNumber": 238},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/239", "sectionNumber": 239},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/240", "sectionNumber": 240},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/241", "sectionNumber": 241},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/242", "sectionNumber": 242},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/243", "sectionNumber": 243},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/244", "sectionNumber": 244},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/245", "sectionNumber": 245},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/247", "sectionNumber": 247},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/248", "sectionNumber": 248},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/249", "sectionNumber": 249},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/250", "sectionNumber": 250},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/251", "sectionNumber": 251},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/301", "sectionNumber": 301},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/302", "sectionNumber": 302},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/303", "sectionNumber": 303},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/304", "sectionNumber": 304},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/305", "sectionNumber": 305},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/306", "sectionNumber": 306},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/307", "sectionNumber": 307},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/308", "sectionNumber": 308},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/309", "sectionNumber": 309},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/310", "sectionNumber": 310},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/311", "sectionNumber": 311},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/312", "sectionNumber": 312},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/313", "sectionNumber": 313},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/314", "sectionNumber": 314},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/315", "sectionNumber": 315},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/316", "sectionNumber": 316},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/317", "sectionNumber": 317},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/318", "sectionNumber": 318},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/319", "sectionNumber": 319},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/320", "sectionNumber": 320},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/321", "sectionNumber": 321},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/322", "sectionNumber": 322},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/323", "sectionNumber": 323},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/324", "sectionNumber": 324},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/325", "sectionNumber": 325},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/326", "sectionNumber": 326},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/327", "sectionNumber": 327},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/328", "sectionNumber": 328},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/329", "sectionNumber": 329},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/330", "sectionNumber": 330},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/331", "sectionNumber": 331},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/332", "sectionNumber": 332},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/333", "sectionNumber": 333},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/334", "sectionNumber": 334},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/335", "sectionNumber": 335},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/336", "sectionNumber": 336},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/337", "sectionNumber": 337},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/338", "sectionNumber": 338},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/339", "sectionNumber": 339},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/340", "sectionNumber": 340},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/341", "sectionNumber": 341},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/342", "sectionNumber": 342},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/343", "sectionNumber": 343},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/344", "sectionNumber": 344},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/glp/345", "sectionNumber": 345}
            ]};


var mmp = { "_id": new ObjectID(),
            "stadiumName": "Minute Maid Park",
            "stadiumPath": "/images/mmpstadium.png",
            "sections": [
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/100", "sectionNumber": 100},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/101", "sectionNumber": 101},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/102", "sectionNumber": 102},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/103", "sectionNumber": 103},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/104", "sectionNumber": 104},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/105", "sectionNumber": 105},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/106", "sectionNumber": 106},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/108", "sectionNumber": 108},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/109", "sectionNumber": 109},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/110", "sectionNumber": 110},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/111", "sectionNumber": 111},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/112", "sectionNumber": 112},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/113", "sectionNumber": 113},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/114", "sectionNumber": 114},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/116", "sectionNumber": 116},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/118", "sectionNumber": 118},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/119", "sectionNumber": 119},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/120", "sectionNumber": 120},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/122", "sectionNumber": 122},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/124", "sectionNumber": 124},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/125", "sectionNumber": 125},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/126", "sectionNumber": 126},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/127", "sectionNumber": 127},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/128", "sectionNumber": 128},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/129", "sectionNumber": 129},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/131", "sectionNumber": 131},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/132", "sectionNumber": 132},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/133", "sectionNumber": 133},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/134", "sectionNumber": 134},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/150", "sectionNumber": 150},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/151", "sectionNumber": 151},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/152", "sectionNumber": 152},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/153", "sectionNumber": 153},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/154", "sectionNumber": 154},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/155", "sectionNumber": 155},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/156", "sectionNumber": 156},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/205", "sectionNumber": 205},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/206", "sectionNumber": 206},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/207", "sectionNumber": 207},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/208", "sectionNumber": 208},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/209", "sectionNumber": 209},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/210", "sectionNumber": 210},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/211", "sectionNumber": 211},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/212", "sectionNumber": 212},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/213", "sectionNumber": 213},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/214", "sectionNumber": 214},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/215", "sectionNumber": 215},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/216", "sectionNumber": 216},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/217", "sectionNumber": 217},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/218", "sectionNumber": 218},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/219", "sectionNumber": 219},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/220", "sectionNumber": 220},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/221", "sectionNumber": 221},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/222", "sectionNumber": 222},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/223", "sectionNumber": 223},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/224", "sectionNumber": 224},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/225", "sectionNumber": 225},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/226", "sectionNumber": 226},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/227", "sectionNumber": 227},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/228", "sectionNumber": 228},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/229", "sectionNumber": 229},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/230", "sectionNumber": 230},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/231", "sectionNumber": 231},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/232", "sectionNumber": 232},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/233", "sectionNumber": 233},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/234", "sectionNumber": 234},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/235", "sectionNumber": 235},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/236", "sectionNumber": 236},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/250", "sectionNumber": 250},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/251", "sectionNumber": 251},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/252", "sectionNumber": 252},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/253", "sectionNumber": 253},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/254", "sectionNumber": 254},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/255", "sectionNumber": 255},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/256", "sectionNumber": 256},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/257", "sectionNumber": 257},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/258", "sectionNumber": 258},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/305", "sectionNumber": 305},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/306", "sectionNumber": 306},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/307", "sectionNumber": 307},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/309", "sectionNumber": 309},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/310", "sectionNumber": 310},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/311", "sectionNumber": 311},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/313", "sectionNumber": 313},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/314", "sectionNumber": 314},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/315", "sectionNumber": 315},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/316", "sectionNumber": 316},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/317", "sectionNumber": 317},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/318", "sectionNumber": 318},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/319", "sectionNumber": 319},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/320", "sectionNumber": 320},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/321", "sectionNumber": 321},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/322", "sectionNumber": 322},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/323", "sectionNumber": 323},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/324", "sectionNumber": 324},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/325", "sectionNumber": 325},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/327", "sectionNumber": 327},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/328", "sectionNumber": 328},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/329", "sectionNumber": 329},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/330", "sectionNumber": 330},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/331", "sectionNumber": 331},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/332", "sectionNumber": 332},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/333", "sectionNumber": 333},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/334", "sectionNumber": 334},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/336", "sectionNumber": 336},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/337", "sectionNumber": 337},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/338", "sectionNumber": 338},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/406", "sectionNumber": 406},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/407", "sectionNumber": 407},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/408", "sectionNumber": 408},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/409", "sectionNumber": 409},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/410", "sectionNumber": 410},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/411", "sectionNumber": 411},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/413", "sectionNumber": 413},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/414", "sectionNumber": 414},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/415", "sectionNumber": 415},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/416", "sectionNumber": 416},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/417", "sectionNumber": 417},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/418", "sectionNumber": 418},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/419", "sectionNumber": 419},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/420", "sectionNumber": 420},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/421", "sectionNumber": 421},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/422", "sectionNumber": 422},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/423", "sectionNumber": 423},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/424", "sectionNumber": 424},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/425", "sectionNumber": 425},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/427", "sectionNumber": 427},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/428", "sectionNumber": 428},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/429", "sectionNumber": 429},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/430", "sectionNumber": 430},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/431", "sectionNumber": 431},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/432", "sectionNumber": 432},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/433", "sectionNumber": 433},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/434", "sectionNumber": 434},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/436", "sectionNumber": 436},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/437", "sectionNumber": 437},
              {"_id": new ObjectID(), "sectionURL": "/stadiums/mmp/438", "sectionNumber": 438}
            ]};


var imgdata = [{"_id": new ObjectID(),
                "photoPath": "/images/img_0001.jpeg",
                "seatNumber": 4,
                "seatRow": "A",
                "seatRank": 3,
                "userId": new ObjectID(),
                "comment": "woooo!",
                "section": 3,
                "stadium": "glp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0002.jpeg",
                "seatNumber": 3,
                "seatRow": "E",
                "seatRank": 4,
                "userId": new ObjectID(),
                "comment": "yay!",
                "section": 3,
                "stadium": "glp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0003.jpeg",
                "seatNumber": 1,
                "seatRow": "G",
                "seatRank": 12,
                "userId": new ObjectID(),
                "comment": "yippee!",
                "section": 4,
                "stadium": "glp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0004.jpeg",
                "seatNumber": 5,
                "seatRow": "D",
                "seatRank": 2,
                "userId": new ObjectID(),
                "comment": "yeehaw!",
                "section": 4,
                "stadium": "glp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0005.jpeg",
                "seatNumber": 4,
                "seatRow": "A",
                "seatRank": 3,
                "userId": new ObjectID(),
                "comment": "wooo!",
                "section": 100,
                "stadium": "mmp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0006.jpeg",
                "seatNumber": 3,
                "seatRow": "E",
                "seatRank": 4,
                "userId": new ObjectID(),
                "comment": "yay!",
                "section": 100,
                "stadium": "mmp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0007.jpeg",
                "seatNumber": 1,
                "seatRow": "G",
                "seatRank": 12,
                "userId": new ObjectID(),
                "comment": "yippee!",
                "section": 101,
                "stadium": "mmp"},
              { "_id": new ObjectID(),
                "photoPath": "/images/img_0008.jpg",
                "seatNumber": 5,
                "seatRow": "D",
                "seatRank": 2,
                "userId": new ObjectID(),
                "comment": "yeehaw!",
                "section": 101,
                "stadium": "mmp"}];



var Stadium = module.exports = mongoose.model('Stadium', StadiumSchema);
var Image = mongoose.model('Image', PhotoSchema);


module.exports.getStadiumByName = function(name, next){
  var query = { stadiumName: name };
  Stadium.findOne(query, next);
}

module.exports.getSectionInfo = function(name, next){
  var query = { 'sections.sectionURL': name },
      query2 = { 'sections.sectionURL.$': 1, '_id':0};
  Stadium.findOne(query, query2, next);
}




module.exports.getStadiumByPath = function(stadiumPath, next){
  var query = { stadiumPath: stadiumPath };
  Stadium.findOne(query, next);
}

module.exports.addNewPhoto = function(photoData, next){
  new Image(photoData).save(next);
}

module.exports.getImages = function(data, next){
  Image.find(data, next);
}




module.exports.createGLP = function(next){
  new Stadium(glp).save(next);
}



module.exports.createMMP = function(next){
  new Stadium(mmp).save(next);
}


module.exports.createImages = function(next){
  Image.collection.insert(imgdata, function(err, list){
    if (err) {
      throw err;
    }
    console.log("\nlist:", list);
  });
}