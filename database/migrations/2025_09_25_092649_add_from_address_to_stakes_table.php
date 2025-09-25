<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFromAddressToStakesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stakes', function (Blueprint $table) {
            $table->string('hash')->after('user_id')->nullable();
            $table->string('from_address')->after('hash')->nullable();
            $table->string('to_address')->after('from_address')->nullable();
            $table->string('token_symbol')->after('to_address')->nullable();
            $table->string('value')->after('token_symbol')->nullable();
            $table->string('value_formatted')->after('value')->nullable();
            $table->string('summary')->after('value_formatted')->nullable();
            $table->string('block_timestamp')->after('summary')->nullable();
            $table->string('transaction_fee')->after('block_timestamp')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stakes', function (Blueprint $table) {
            $table->dropColumn('hash');
            $table->dropColumn('from_address');
            $table->dropColumn('to_address');
            $table->dropColumn('token_symbol');
            $table->dropColumn('value');
            $table->dropColumn('value_formatted');
            $table->dropColumn('summary');
            $table->dropColumn('block_timestamp');
            $table->dropColumn('transaction_fee');
        });
    }
}
