<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id')->unique();        // your merchant invoice id (custom_data1)
            $table->string('external_invoice_id')->nullable(); // coinremitter's invoice id
            $table->string('coin')->default('BTC');
            $table->decimal('amount', 16, 8)->nullable();
            $table->string('currency')->nullable();
            $table->string('status')->default('pending'); // pending, paid, expired...
            $table->decimal('paid_amount', 16, 8)->nullable();
            $table->string('txid')->nullable();
            $table->string('invoice_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
