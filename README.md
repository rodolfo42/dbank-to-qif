# Deutsche Bank CSV to QIF converter

Warning: written in a rush. no 'nice code' here.

## installation

```
$ git clone git@github.com:rodolfo42/dbank-to-qif
$ cd dbank-to-qif
$ make
$ ./run sample.csv
```

## usage

This is implemented to work with the CSV file you get from `Deutsche Bank Finanzplaner > Transactions`.

You have two options:

- call the `run` script from the folder where the CSV file is in
- link the `run` script to your `PATH` (e.g. `ln -s [/path/to/dbank-to-qif]/run ~/bin/dbank_to_qif`)

And then:

```
dbank_to_qif file.csv
```
