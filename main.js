'use strict';

if (typeof console.asert !== "function") {
    console.assert = function() {};
}


const BWT = require('./lib/BWT');
const BWTC = require('./lib/BWTC');
const BitStream = require('./lib/BitStream');
const Bzip2 = require('./lib/Bzip2');
const CRC32 = require('./lib/CRC32');
const Context1Model = require('./lib/Context1Model');
const DefSumModel = require('./lib/DefSumModel');
const DeflateDistanceModel = require('./lib/DeflateDistanceModel');
const Dmc = require('./lib/Dmc');
const DummyRangeCoder = require('./lib/DummyRangeCoder');
const FenwickModel = require('./lib/FenwickModel');
const Huffman = require('./lib/Huffman');
const HuffmanAllocator = require('./lib/HuffmanAllocator');
const LogDistanceModel = require('./lib/LogDistanceModel');
const Lzjb = require('./lib/Lzjb');
const LzjbR = require('./lib/LzjbR');
const Lzp3 = require('./lib/Lzp3');
const MTFModel = require('./lib/MTFModel');
const NoModel = require('./lib/NoModel');
const PPM = require('./lib/PPM');
const RangeCoder = require('./lib/RangeCoder');
const Simple = require('./lib/Simple');
const Stream = require('./lib/Stream');
const Util = require('./lib/Util');
const freeze = require('./lib/freeze');

exports.selectAlgorithm = new function(algorithm) {
    switch (algorithm.toLowerCase()) {
        case 'bwtc': return BWTC;
        case 'bzip2': return Bzip2;
        case 'dmc': return Dmc;
        case 'lzjb': return Lzjb;
        case 'lzjbr': return LzjbR;
        case 'lzp3': return Lzp3;
        case 'ppm': return PPM;
        default: return null;
    }
}

exports.BWT = BWT;
exports.BWTC = BWTC;
exports.BitStream = BitStream;
exports.Bzip2 = Bzip2;
exports.CRC32 = CRC32;
exports.Context1Model = Context1Model;
exports.DefSumModel = DefSumModel;
exports.DeflateDistanceModel = DeflateDistanceModel;
exports.Dmc = Dmc;
exports.DummyRangeCoder = DummyRangeCoder;
exports.FenwickModel = FenwickModel;
exports.Huffman = Huffman;
exports.HuffmanAllocator = HuffmanAllocator;
exports.LogDistanceModel = LogDistanceModel;
exports.Lzjb = Lzjb;
exports.LzjbR = LzjbR;
exports.Lzp3 = Lzp3;
exports.MTFModel = MTFModel;
exports.NoModel = NoModel;
exports.PPM = PPM;
exports.RangeCoder = RangeCoder;
exports.Simple = Simple;
exports.Stream = Stream;
exports.Util = Util;
exports.freeze = freeze;
