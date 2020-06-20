#!/bin/bash
zokrates compile -i Flexi.zok
zokrates setup
zokrates compute-witness -a 0 1 0
zokrates generate-proof
zokrates export-verifier
