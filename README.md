# Deutsche Bank CSV to QIF converter

_Warning: written in a rush. no 'nice code' here._

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
- link the `run` script to your `PATH` via `make link`

And then:

```
dbank_to_qif file.csv
```
